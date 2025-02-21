import Link from "next/link"
import { ResumeCardButton } from "../resume-card"
import { AddResumeButton } from "../add-resume-button"
import { NewResumeDialog } from "../new-resume-dialog"

export const ResumeList = async () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 auto-rows-max gap-2 lg:gap-5 flex-1">
    
    <NewResumeDialog>
      <AddResumeButton />
    </NewResumeDialog>

    {Array.from({length: 12}).map((_, index) => (
      <Link key={index} href={`#`} className="block w-full">
      <ResumeCardButton 
      title="Ingles A2"
      description={`Última atualização ha 1 dia`}
      />
    </Link>
    ))}
    </section>
  )
}