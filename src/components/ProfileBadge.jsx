
import { useRef, useState } from 'react';

const ProfileBadge = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const dragStart = useRef({ x: 0, y: 0 });
    const initialPosition = useRef({ x: 0, y: 0 });

    const handlePointerDown = (e) => {
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);

        dragStart.current = {
            x: e.clientX,
            y: e.clientY,
        };

        initialPosition.current = { ...position };

        setIsDragging(true);
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - dragStart.current.x;
        const deltaY = e.clientY - dragStart.current.y;

        setPosition({
            x: Math.max(-160, Math.min(160, initialPosition.current.x + deltaX)),
            y: Math.max(-170, Math.min(170, initialPosition.current.y + deltaY)),
        });
    };

    const handlePointerUp = () => {
        setIsDragging(false);
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    // Titik pengait mengikuti pergerakan kartu
    const hookX = 200 + x;
    const hookY = 218 + y;

    return (
        <div className="hero-visual">
            <div className="badge-scene">

                {/* Tali lanyard yang mengikuti kartu */}
                <svg
                    className="badge-rope"
                    viewBox="0 0 400 620"
                    preserveAspectRatio="none"
                >
                    <path
                        d={`M 200 0 C 200 100, ${hookX} 100, ${hookX} ${hookY}`}
                        fill="none"
                        stroke="#55545c"
                        strokeWidth="23"
                        strokeLinecap="round"
                    />

                    <path
                        d={`M 200 0 C 200 100, ${hookX} 100, ${hookX} ${hookY}`}
                        fill="none"
                        stroke="#17171d"
                        strokeWidth="19"
                        strokeLinecap="round"
                    />

                    <path
                        d={`M 200 0 C 200 100, ${hookX} 100, ${hookX} ${hookY}`}
                        fill="none"
                        stroke="#393841"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeDasharray="3 5"
                    />
                </svg>

                {/* Tulisan pada tali */}
                <div className="lanyard-strap">
                    <span>NAUFAL HILMY MUNTE</span>
                </div>

                {/* Pengait logam */}
                <div
                    className="badge-hook"
                    style={{
                        left: `${hookX}px`,
                        top: `${hookY - 12}px`,
                    }}
                >
                    <div className="hook-ring" />
                    <div className="hook-clip" />
                </div>

                {/* Kartu kokarde */}
                <div
                    className={`badge-card ${isDragging ? 'dragging' : ''}`}
                    style={{
                        transform: `translate(calc(-50% + ${x}px), ${y}px) rotate(${x * 0.035}deg)`,
                    }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                >
                    <div className="badge-top">
                        <span className="badge-brand">PNP</span>
                        <span className="badge-status">STUDENT ID</span>
                    </div>

                   <div className="badge-photo">
                            <img
                            src="/images/profile.jpeg"
                            alt="Foto Naufal Hilmy Munte"
                            draggable="false"
                        />
                    </div>

                    <div className="badge-identity">
                        <span className="badge-caption">WEB DEVELOPER</span>

                        <h2>Naufal Hilmy Munte</h2>

                        <p>Manajemen Informatika</p>
                    </div>

                    <div className="badge-footer">
                        <span>POLITEKNIK NEGERI PADANG</span>
                        <span>2026</span>
                    </div>
                </div>

                <p className="badge-hint">
                    ↕ Tarik kartu untuk berinteraksi
                </p>
            </div>
        </div>
    );
};

export default ProfileBadge;
