import { useState, useEffect } from 'react'

export default function useWindowDimension() {
    const [medium, setMedium] = useState(window.innerWidth > 640)

    useEffect(() => {
        function handleResize() {
            setMedium(window.innerWidth > 640);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return medium
}