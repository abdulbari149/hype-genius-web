import React, { CSSProperties, PropsWithChildren } from 'react'
import ReactModal, { Props as ReactModalProps } from 'react-modal'
import Close from '../Close'

interface ModalProps extends ReactModalProps {
	isOpen: boolean
	handleClose: () => void
}

const contentCustomStyle: CSSProperties = {
	maxWidth: '800px',
	width: '100%',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	height: '80%',
	borderRadius: 10,
}

const overlayCustomStyle: CSSProperties = {
	backgroundColor: '#00000080',
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
	isOpen,
	handleClose,
	children,
	style = { content: {}, overlay: {} },
	...props
}) => {
	return (
		<ReactModal
			isOpen={isOpen}
			{...props}
			onRequestClose={() => handleClose()}
			style={{
				content: { ...contentCustomStyle, ...(style?.content ?? {}) },
				overlay: { ...overlayCustomStyle, ...(style?.overlay ?? {}) },
			}}
		>
			<div className="relative w-full h-full px-8">
				<Close onClose={handleClose} />
				{children}
			</div>
		</ReactModal>
	)
}

export default Modal
