import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

const PostIdPages = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(params.id)
		setPost(response.data)
	})
	const [fetchComments, isComLoading, comError] = useFetching(async () => {
		const response = await PostService.getCommentByPostId(params.id)
		setComments(response.data)
	})
	useEffect(() => {
		fetchPostById()
		fetchComments()
	}, [])
	console.log(comments)
	return (
		<div style={{ marginLeft: 30, marginTop: 70 }}>
			<h1 style={{ textAlign: 'center' }}>PostIdPages = {params.id}</h1>
			{isLoading && isComLoading ? (
				<Loader />
			) : (
				<div>
					{post.id}. {post.title}
					<br />
					<NavLink
						to='/posts'
						style={({ isActive }) => {
							return {
								fontSize: '40px',
								color: isActive ? '#11b533' : 'var(--text-color)',
							}
						}}
					>
						Posts
					</NavLink>
					<h1>Comments</h1>
					<div>
						{comments.map(comm => (
							<div
								key={comm.id}
								style={{
									marginTop: 15,
									border: '1px solid',
									borderColor: '--button-border-color',
									padding: 15,
									margin: '0px 10px 10px 0px',
								}}
							>
								<h5>{comm.email}</h5>
								<div>{comm.body}</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default PostIdPages
