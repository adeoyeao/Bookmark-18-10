import Image from "./Image"

const Social = (props) => {
      return (
            <a href={`https://www.${props.social}.com`} target="_blank">
                  <Image url={props.url}/>
            </a>
      )
}

export default Social