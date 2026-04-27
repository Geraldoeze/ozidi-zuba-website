'use client'

import { ExternalLink, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface GalleryCardProps {
  image: string
  title: string
  description: string
  platform: 'instagram' | 'facebook'
  link: string
  likes?: number
  comments?: number
}

export default function GalleryCard({
  image,
  title,
  description,
  platform,
  link,
  likes,
  comments,
}: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const platformColor = {
    instagram: 'from-purple-500 to-pink-500',
    facebook: 'from-blue-600 to-blue-800',
  }

  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-card border border-border/40 hover:border-primary/60 transition-all duration-300 hover:shadow-gold"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-80 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4 animate-fade-in">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-110"
              title={`View on ${platform}`}
            >
              <ExternalLink size={24} />
            </a>
          </div>
        )}

        {/* Platform Badge */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${platformColor[platform]}`}
        >
          {platform === 'instagram' ? 'Instagram' : 'Facebook'}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{description}</p>

        {/* Stats */}
        {(likes !== undefined || comments !== undefined) && (
          <div className="flex gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border/40">
            {likes !== undefined && (
              <div className="flex items-center gap-1">
                <Heart size={14} />
                <span>{likes.toLocaleString()}</span>
              </div>
            )}
            {comments !== undefined && (
              <div className="flex items-center gap-1">
                <MessageCircle size={14} />
                <span>{comments.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}

        {/* CTA Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-sm font-medium w-full justify-center"
        >
          View Post
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}
