import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToFavoritesAsync } from '../store/actions/favorites'
import { deleteFav } from '../store/actions/deleteFav'

export default function PhotoList ({photo}) {    

    const dispatch = useDispatch()
    const { path } = useRouteMatch()

    let history = useHistory()

    const addToFavorite = (e, favPhoto) => {
        e.preventDefault()
        dispatch(addToFavoritesAsync(favPhoto))
    }

    const deleteById = (e, favPhoto) => {
        e.preventDefault()
        dispatch(deleteFav(favPhoto))
    }

    const goToDetail = (id) => {
        history.push(`/detail/${id}`)
    }

    return (
        <div className="col-4">
            <div className="card" style={{margin: "10px"}}>
                <img src={photo.download_url} className="card-img-top" alt="" />
                {
                    path === '/favorites' ?
                        <div className="topright" style={{position: "absolute", top: "8px", right: "16px", fontSize: "18px"}}> 
                            <a href='#' className="btn" onClick={(e) => deleteById(e, photo)}>
                                <img src="https://freesvg.org/img/heart-15.png" style={{height: "25px"}} alt="love"/>   
                            </a>
                        </div>
                    :
                    <div>
                        <button className="btn btn-info" style={{width: "100%"}} onClick={() => goToDetail(photo.id)}>Show Detail</button>
                        <div className="topright" style={{position: "absolute", top: "8px", right: "16px", fontSize: "18px"}}> 
                            <a href='#' className="btn" onClick={(e) => addToFavorite(e, photo)}>
                                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png" style={{height: "25px"}} alt="love"/>   
                            </a>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
