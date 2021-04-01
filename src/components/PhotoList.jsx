import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import addToFavorites from '../store/actions/favorites'



export default function PhotoList ({photo}) {
    

    const dispatch = useDispatch()

    let history = useHistory()

    const addToFavorite = (favPhoto, e) => {
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Favorites Added'
          })
        dispatch(addToFavorites(favPhoto))
    }

    const goToDetail = (id) => {
        history.push(`/detail/${id}`)
    }

    return (
        <div className="col-4">
            <div className="card" style={{margin: "10px"}}>
                <img src={photo.download_url} className="card-img-top" alt="Photo" />
                <button className="btn btn-info" onClick={() => goToDetail(photo.id)}>Show Detail</button>
                <div className="topright" style={{position: "absolute", top: "8px", right: "16px", fontSize: "18px"}}> 
                    <a href='#' className="btn" onClick={(e) => addToFavorite(photo, e)}>
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png" style={{height: "25px"}} alt="love"/>   
                    </a>
                </div>
            </div>
        </div>
    )
}
