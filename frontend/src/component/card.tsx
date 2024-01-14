import { Paper } from "@mui/material"

interface ICard {
  title: string
  heading: string
  value: number
  unit: string
}

const Card = (children: ICard) => {
  return (
    <Paper className=' px-16 py-10'>
      <p className='text-xl font-extrabold  '>{children.title}</p>
      <div className='flex '>
        <p className='text-lg '>
          {children.heading} : {children.value}
        </p>
        <p className='text-lg ml-1'>{children.unit}</p>
      </div>
    </Paper>
  )
}

export default Card
