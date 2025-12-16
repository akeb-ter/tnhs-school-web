//progress bars
export function loadProgressBars() {
    const jhs_bar = document.getElementById('jhs_bar');
    const shs_bar = document.getElementById('shs_bar');
    const bar_jhs = new ProgressBar.Line(jhs_bar, {
        strokeWidth: 4,
        color: '#4cc9f0',
        trailColor: '#1f2a37',
        duration: 1200,
        easing: 'easeOut',
    });

    const bar_shs = new ProgressBar.Line(shs_bar, {
        strokeWidth: 4,
        color: '#4cc9f0',
        trailColor: '#1f2a37',
        duration: 1200,
        easing: 'easeOut',
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
            bar_jhs.animate(0.6); // 460%
            bar_shs.animate(0.4); // 0%
            }, 800);      

            observer.disconnect(); // run once
        }
        });
    });

    observer.observe(document.getElementById('jhs_bar'));
    observer.observe(document.getElementById('shs_bar'));
}