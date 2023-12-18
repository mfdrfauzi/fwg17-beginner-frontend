import FeatherIcon from "feather-icons-react"

const Brand = ({textColor}) =>{
    return (
      <div className={`flex text-${(textColor)} font-brand flex-shrink-0`}>
        <i>
          <FeatherIcon icon="coffee" className="h-5 w-5" />
        </i>
        <div className="text-xl ml-3">
          Cofee Shop
        </div>
      </div>
    )
}

export default Brand