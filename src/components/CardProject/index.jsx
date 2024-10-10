import todo from '../../assets/todo.svg'


import { CardContainer } from './styles'

export function CardProject() {
  return(
  <CardContainer>
    <div>
      <div> 
        <h2>TodoList</h2>
      </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Officia assumenda, repudiandae reiciendis nihil exercitationem 
          voluptatem sapiente natus sunt incidunt quisquam quas odio id illo 
          officiis hic placeat cum nulla quo?
        </p>
        <a href="https://github.com/PabloRafael-coder/to-do-list">https://github.com/PabloRafael-coder/to-do-list</a>
      </div>
    <div>
      <img src={todo} alt="" />
    </div>
  </CardContainer>
  )
}