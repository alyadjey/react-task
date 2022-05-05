import React from 'react'
import cl from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
	return (
		<div className={visible ? `${cl.myModal} ${cl.active}` : cl.myModal} onClick={() => setVisible(false)}>
			<div
				className={visible ? `${cl.myModalContent} ${cl.active}` : cl.myModalContent}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}
export default MyModal
