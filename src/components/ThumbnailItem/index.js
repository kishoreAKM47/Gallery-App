// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, updateImageId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ?'thumbanil' :'thumbnail active'
  const onClickThumbnail = () => {
    updateImageId(id)
  }
  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
