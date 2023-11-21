import {Avatar, AvatarFallback, AvatarImage} from '@/app/components/ui/avatar'

export default function Home() {
  return (
      <div className="flex items-center space-x-2">
          <div className="mx-auto mt-10">
              <Avatar>
                  <AvatarImage src="https://github.com/half.png" alt="@half" />
                  <AvatarFallback>Half</AvatarFallback>
              </Avatar>
          </div>
      </div>
  )
}
