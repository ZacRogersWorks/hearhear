import { useState, useEffect } from "react";

const useBodyScrollLock = () => {

  const [isLocked, setIsLocked] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = isLocked ? 'hidden' : 'auto'
  }, [isLocked])

  const toggle = () => setIsLocked(!isLocked)

  return [isLocked, toggle]
}

export default useBodyScrollLock