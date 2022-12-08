import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
// import { ReviewsContext } from './context/Reviews';
// import ItemReviewCard from './ItemReviewCard';
// import ReviewForm from './ReviewForm';
import { ItemsContext } from './context/Items';
import {Container} from 'react-bootstrap'



    const Review = () => {

    // const { reviews, setReviews } = useContext(ReviewsContext)
    const { items } = useContext(ItemsContext)

    let { id } = useParams()

    // const displayedReviews = reviews.filter(review => {
    //     return review.product.id === Number(id)
    // })
    const currentItem = items.filter(item => {
        return item.id === Number(id)
    })

    // function handleAddReview(newReview) {
    //     setReviews([...reviews, newReview])
    // }

    return (
        <div>
        <Container>
         
            <div>
                {/* {displayedReviews.map(review => {
                    return <ItemReviewCard key={review.id} review={review}/>
                })} */}
                
            </div>
        </Container>
        {/* < ReviewForm curentItemId={id} onAddReview={handleAddReview} /> */}
        </div>
    )
}


export default Review