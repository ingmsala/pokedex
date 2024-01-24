import { useRouter } from 'next/navigation'

export default function ButtonBack () {
  const router = useRouter()

  function handleBack () {
    router.back()
  }

  return (
    <button className='absolute top-1 right-3' onClick={handleBack}>✕</button>
  )
}
