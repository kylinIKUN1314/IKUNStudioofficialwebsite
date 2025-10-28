// 移动菜单切换
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });
}

// 平滑滚动
const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // 关闭移动菜单
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          if (mobileMenuBtn) {
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          }
        }
      }
    });
  });
};

// 导航栏滚动效果
const headerScroll = () => {
  const header = document.querySelector('header');
  const navbar = document.querySelector('.navbar');
  
  if (header && navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
        navbar.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        navbar.classList.remove('scrolled');
      }
    });
  }
};

// 返回顶部按钮
const backToTop = () => {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

// 表单验证和提交
const formValidation = () => {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // 简单验证
      if (!name || !email || !message) {
        alert('请填写所有必填字段');
        return;
      }
      
      // 简单邮箱验证
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('请输入有效的邮箱地址');
        return;
      }
      
      // 模拟表单提交
      alert('表单提交成功！我们会尽快与您联系。');
      contactForm.reset();
    });
  }
};

// 服务卡片动画
const serviceCardAnimation = () => {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
      card.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
  });
};

// 滚动触发动画
const scrollTriggerAnimation = () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeElements.forEach(element => {
    fadeInObserver.observe(element);
  });
};

// 图片点击效果
const imageClickEffect = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('click', () => {
      img.style.transform = 'scale(1.05)';
      setTimeout(() => {
        img.style.transform = 'scale(1)';
      }, 300);
    });
  });
};

// 初始化所有功能
const init = () => {
  // 移除HTML错误
  const fixHtmlErrors = () => {
    // 修复电子邮件链接
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
      const email = link.getAttribute('href').replace('mailto:', '');
      if (email) {
        link.textContent = email;
      }
    });
    
    // 修复未关闭的标签
    const openTags = document.querySelectorAll('p:not(:has(> *)):not(:contains(">"))');
    openTags.forEach(tag => {
      // 这里只是一个占位，实际的标签修复需要更具体的逻辑
    });
  };
  
  fixHtmlErrors();
  smoothScroll();
  headerScroll();
  backToTop();
  formValidation();
  serviceCardAnimation();
  scrollTriggerAnimation();
  imageClickEffect();
  
  // 页面加载完成后隐藏加载动画
  window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
      setTimeout(() => {
        loading.classList.add('fade-out');
      }, 500);
    }
  });
};

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);