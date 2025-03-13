"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  // Use motion values for smoother animation
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Add spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 300 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  // Memoize the update function to prevent unnecessary re-renders
  const updatePosition = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    },
    [cursorX, cursorY],
  )

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth < 768) return

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Use passive event listeners for better performance
    document.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [updatePosition])

  // Don't render on mobile or server
  if (typeof window === "undefined" || window.innerWidth < 768) return null

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: isPointer ? 20 : 32,
          height: isPointer ? 20 : 32,
          borderRadius: "50%",
          border: "1px solid hsl(var(--primary))",
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          willChange: "transform", // Hardware acceleration hint
        }}
        transition={{
          opacity: { duration: 0.2 },
          width: { type: "spring", damping: 20, stiffness: 200 },
          height: { type: "spring", damping: 20, stiffness: 200 },
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPointer ? 8 : 4,
          height: isPointer ? 8 : 4,
          borderRadius: "50%",
          backgroundColor: "hsl(var(--primary))",
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          willChange: "transform", // Hardware acceleration hint
        }}
        transition={{
          opacity: { duration: 0.2 },
          width: { type: "spring", damping: 20, stiffness: 200 },
          height: { type: "spring", damping: 20, stiffness: 200 },
        }}
      />
    </>
  )
}

