import { X } from 'lucide-react'
import { useState, B_Button as Button } from '@/utils/alias';

export function Alert({children, className, btnClose}: {children?: React.ReactNode, className?: string, btnClose?: boolean}) {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    // <div className={"fixed inset-x-0 top-16 mx-auto max-w-md"}>
    // <div className={className + " fixed inset-x-0 top-16 mx-auto max-w-md"}>
    <div className={"alert" + (className? ' ' + className : '')}>
      {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm"> */}
      <article className="alert__body">
        <section className="flex items-start">
          <section className="flex-1 flex justify-start items-center gap-1"> {children} </section>

          {/* <div className="flex-shrink-0">
            <div className="bg-blue-100 p-1.5 rounded-full">
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-blue-800">Information</h3>
            <div className="mt-1 text-sm text-blue-700">
              <p>This is an important message for you to read.</p>
            </div>
          </div> */}

          {/* <div className="flex-shrink-0 flex"> */}
          <section className="flex-0">
            {btnClose && (
              <Button
                // className="btn-none hover"
                className="btn-danger"
                onClick={handleClose}
              >
                <X className="size-[1em]" />
              </Button>
            )}
          </section>
        </section>
      </article>
    </div>
  )
}

export default Alert;