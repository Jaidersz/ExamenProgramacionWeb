// DOM Elements
const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")
const searchInput = document.querySelector(".search-input")
const composerInput = document.querySelector(".composer-input")
const actionButtons = document.querySelectorAll(".action-btn")

// Tab Navigation Functionality
function initTabNavigation() {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      document.getElementById(targetTab).classList.add("active")

      // Smooth scroll to content
      document.querySelector(".content-container").scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  })
}

// Search Functionality
function initSearch() {
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const searchTerm = searchInput.value.trim()
        if (searchTerm) {
          alert(`Buscando: "${searchTerm}"`)
          // Here you would implement actual search functionality
        }
      }
    })
  }
}

// Post Composer Functionality
function initPostComposer() {
  if (composerInput) {
    composerInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        const postContent = composerInput.value.trim()
        if (postContent) {
          createNewPost(postContent)
          composerInput.value = ""
        }
      }
    })
  }
}

// Create New Post
function createNewPost(content) {
  const postsContainer = document.querySelector(".posts-container")
  const newPost = document.createElement("div")
  newPost.className = "post"

  const currentTime = new Date().toLocaleString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  })

  newPost.innerHTML = `
        <div class="post-header">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="José" class="post-avatar">
            <div class="post-info">
                <h3 class="post-author">José Manrique</h3>
                <p class="post-time">Hace unos momentos</p>
            </div>
        </div>
        <div class="post-content">
            <p>${content}</p>
        </div>
        <div class="post-actions">
            <button class="action-btn">👍 Me gusta</button>
            <button class="action-btn">💬 Comentar</button>
            <button class="action-btn">📤 Compartir</button>
        </div>
    `

  // Insert after post composer
  const postComposer = document.querySelector(".post-composer")
  postsContainer.insertBefore(newPost, postComposer.nextSibling)

  // Add click events to new post actions
  initPostActions(newPost)

  // Animate new post
  newPost.style.opacity = "0"
  newPost.style.transform = "translateY(-20px)"
  setTimeout(() => {
    newPost.style.transition = "all 0.3s ease"
    newPost.style.opacity = "1"
    newPost.style.transform = "translateY(0)"
  }, 100)
}

// Post Actions (Like, Comment, Share)
function initPostActions(container = document) {
  const postActionButtons = container.querySelectorAll(".post-actions .action-btn")

  postActionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const action = button.textContent.trim()

      if (action.includes("Me gusta")) {
        toggleLike(button)
      } else if (action.includes("Comentar")) {
        showCommentDialog()
      } else if (action.includes("Compartir")) {
        showShareDialog()
      }
    })
  })
}

// Toggle Like Functionality
function toggleLike(button) {
  const isLiked = button.classList.contains("liked")

  if (isLiked) {
    button.textContent = "👍 Me gusta"
    button.classList.remove("liked")
    button.style.color = "var(--text-secondary)"
  } else {
    button.textContent = "👍 Te gusta"
    button.classList.add("liked")
    button.style.color = "var(--facebook-blue)"
    button.style.fontWeight = "600"
  }
}

// Comment Dialog
function showCommentDialog() {
  const comment = prompt("Escribe tu comentario:")
  if (comment && comment.trim()) {
    alert(`Comentario agregado: "${comment}"`)
  }
}

// Share Dialog
function showShareDialog() {
  if (navigator.share) {
    navigator.share({
      title: "Perfil de José Manrique",
      text: "Mira el perfil de José Manrique en Facebook",
      url: window.location.href,
    })
  } else {
    alert("Publicación compartida exitosamente!")
  }
}

// Photo Gallery Functionality
function initPhotoGallery() {
  const photoItems = document.querySelectorAll(".photo-item")

  photoItems.forEach((photo) => {
    photo.addEventListener("click", () => {
      const img = photo.querySelector("img")
      showPhotoModal(img.src, img.alt)
    })
  })
}

// Photo Modal
function showPhotoModal(src, alt) {
  const modal = document.createElement("div")
  modal.className = "photo-modal"
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `

  const img = document.createElement("img")
  img.src = src
  img.alt = alt
  img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
    `

  modal.appendChild(img)
  document.body.appendChild(modal)

  modal.addEventListener("click", () => {
    document.body.removeChild(modal)
  })
}

// Box Interactions
function initBoxInteractions() {
  const boxItems = document.querySelectorAll(".box-item")

  boxItems.forEach((box) => {
    box.addEventListener("click", () => {
      box.style.transform = "scale(0.98)"
      setTimeout(() => {
        box.style.transform = "translateY(-2px)"
      }, 150)
    })
  })
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Responsive Navigation
function initResponsiveNav() {
  const header = document.querySelector(".header")
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.style.transform = "translateY(-100%)"
    } else {
      header.style.transform = "translateY(0)"
    }

    lastScrollY = currentScrollY
  })
}

// Loading Animation
function showLoadingAnimation() {
  const loader = document.createElement("div")
  loader.className = "page-loader"
  loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.3s ease;
    `

  loader.innerHTML = `
        <div style="text-align: center;">
            <div style="width: 40px; height: 40px; border: 3px solid var(--facebook-light-gray); border-top: 3px solid var(--facebook-blue); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 16px;"></div>
            <p style="color: var(--text-secondary); font-size: 14px;">Cargando perfil...</p>
        </div>
    `

  // Add spin animation
  const style = document.createElement("style")
  style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `
  document.head.appendChild(style)

  document.body.appendChild(loader)

  // Remove loader after 1.5 seconds
  setTimeout(() => {
    loader.style.opacity = "0"
    setTimeout(() => {
      if (document.body.contains(loader)) {
        document.body.removeChild(loader)
      }
    }, 300)
  }, 1500)
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Show loading animation
  showLoadingAnimation()

  // Initialize all components
  setTimeout(() => {
    initTabNavigation()
    initSearch()
    initPostComposer()
    initPostActions()
    initPhotoGallery()
    initBoxInteractions()
    initSmoothScrolling()
    initResponsiveNav()

    console.log("Facebook Profile SPA initialized successfully!")
  }, 1000)
})

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("Welcome back to José's profile!")
  }
})

// Error handling
window.addEventListener("error", (e) => {
  console.error("Application error:", e.error)
})

// Performance monitoring
window.addEventListener("load", () => {
  const loadTime = performance.now()
  console.log(`Page loaded in ${Math.round(loadTime)}ms`)
})
