import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function Website({ link }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (link) {
    return (
      <a href={link} className="px-2" target="_blank">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#FFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFF"
            className="text-black fill-current dark:text-white "
            d="M8.46492 20.535C6.44276 20.535 4.6197 19.3169 3.84572 17.4487C3.07175 15.5805 3.49925 13.4301 4.92892 12L7.05092 9.87799L8.46492 11.292L6.34392 13.413C5.58598 14.1709 5.28997 15.2756 5.5674 16.311C5.84482 17.3464 6.65354 18.1551 7.6889 18.4325C8.72426 18.7099 9.82898 18.4139 10.5869 17.656L12.7079 15.535L14.1219 16.95L12.0009 19.071C11.065 20.0115 9.79178 20.5387 8.46492 20.535ZM9.17192 16.242L7.75792 14.828L14.8289 7.75699L16.2429 9.17099L9.17292 16.241L9.17192 16.242ZM16.9509 14.121L15.5359 12.707L17.6569 10.586C18.4252 9.83032 18.7291 8.72065 18.4532 7.67897C18.1772 6.63729 17.3637 5.82364 16.3221 5.54743C15.2805 5.27123 14.1708 5.57491 13.4149 6.34299L11.2929 8.46399L9.87892 7.04999L12.0009 4.92799C13.956 2.98996 17.1099 2.99686 19.0565 4.94344C21.0031 6.89002 21.01 10.0439 19.0719 11.999L16.9509 14.12V14.121Z"
          ></path>
        </svg>
      </a>
    )
  }
  return null
}

export default Website
