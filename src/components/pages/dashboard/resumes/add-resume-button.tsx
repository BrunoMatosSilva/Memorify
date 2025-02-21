import { Plus } from "lucide-react"
import { ResumeCardButton } from "./resume-card"

export const AddResumeButton = () => {
  return (
    <ResumeCardButton 
    title="Crie seu grupo"
    description="Comece do zero"
    icon={<Plus size={50}/>}
    />
  )
}