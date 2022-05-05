import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PostItem = props => {
	const router = useNavigate()
	const { t } = useTranslation()
	return (
		<div>
			<div className='post'>
				<div className='post__content'>
					<strong>
						{props.number}. {props.post.title}
					</strong>
					<div>{props.post.body}</div>
				</div>
				<div className='post__btns'>
					<MyButton onClick={() => router(`/posts/${props.post.id}`)}>{t('Open')}</MyButton>
					<MyButton onClick={() => props.remove(props.post)}>{t('Delete')}</MyButton>
				</div>
			</div>
		</div>
	)
}
export default PostItem
