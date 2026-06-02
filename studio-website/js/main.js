document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  // 1. 初始化准备：先让所有卡片变透明并下移
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // 2. 创建一个“观察器”
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 当卡片进入视口（被用户看到）
      if (entry.isIntersecting) {
        const card = entry.target;
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
        // 动画触发后，停止观察这个卡片（避免重复触发）
        observer.unobserve(card);
      }
    });
  }, {
    threshold: 0.1 // 当卡片露出 10% 的时候就触发动画
  });

  // 3. 开始观察每一个卡片
  cards.forEach(card => observer.observe(card));
});
