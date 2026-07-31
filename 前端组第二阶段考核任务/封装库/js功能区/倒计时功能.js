/**
 * 创建生产级倒计时
 * @param {Function} getTargetTime - 返回目标时间戳的函数（支持动态目标）
 * @param {Function} onUpdate - 每次更新时的回调，参数为剩余毫秒数
 * @returns {Function} stop - 调用后停止倒计时并清理事件监听
 */

/**
 * 创建生产级倒计时
 * @param {Function} getTargetTime - 返回目标时间戳的函数（支持动态目标）
 * @param {Function} onUpdate - 每次更新时的回调，参数为剩余毫秒数
 * @returns {Function} stop - 调用后停止倒计时并清理事件监听
 */
function createCountdown(getTargetTime, onUpdate) {
    let lastUpdate = 0;
    let rafId = null;

    const update = () => {
        const remaining = Math.max(0, getTargetTime() - Date.now());
        onUpdate(remaining);
        return remaining > 0;
    };

    // 首帧立即更新
    if (!update()) return () => {};

    const onVisibilityChange = () => {
        if (!document.hidden) {
            if (!update()) return;
            lastUpdate = performance.now();
        }
    };

    const tick = (timestamp) => {
        if (timestamp - lastUpdate >= 1000) {
            if (!update()) return;
            lastUpdate = timestamp;
        }
        rafId = requestAnimationFrame(tick);
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    rafId = requestAnimationFrame(tick);

    // 返回清理函数，防止内存泄漏
    return () => {
        cancelAnimationFrame(rafId);
        document.removeEventListener('visibilitychange', onVisibilityChange);
    };
}