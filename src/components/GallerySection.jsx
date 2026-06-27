import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryData } from '../data/gallery'

export default function GallerySection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const modalRef = useRef(null)

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    setTouchStartX(null)
  }

  const nextImage = (e) => {
    e?.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = (e) => {
    e?.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    
    // Swipe left (next) - threshold of 50px
    if (diff > 50) {
      nextImage(e)
    }
    // Swipe right (prev)
    else if (diff < -50) {
      prevImage(e)
    }
    setTouchStartX(null)
  }

  return (
    <div>
      {galleryData.map((category) => (
        <div key={category.id} className="mb-16">
          <h2 className="heading-lg text-[#1E293B] mb-6">{category.category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="cursor-pointer overflow-hidden rounded-lg relative"
                onClick={() => openModal(project)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/${project.cover}`}
                  alt={`${category.category} ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                {/* Show badge if multiple images */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-[#B8944A] text-white text-xs px-2 py-1 rounded-full">
                      {project.images.length} photos
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal with Touch Support */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-[#B8944A] transition-colors z-10"
              >
                ×
              </button>

              {/* Image counter */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-1.5 rounded-full z-10">
                {currentImageIndex + 1} of {selectedProject.images.length}
              </div>

              {/* Main image */}
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/${selectedProject.images[currentImageIndex]}`}
                  alt="Gallery"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                {/* Navigation arrows - only show if more than 1 image */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-colors"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-colors"
                    >
                      ›
                    </button>

                    {/* Thumbnail dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(idx)
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex ? 'bg-[#B8944A]' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}