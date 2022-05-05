import React from 'react'
import { useTranslation } from 'react-i18next'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'
const PostFilter = ({ filter, setFilter }) => {
	const { t } = useTranslation()
	let titleName = t('by name')
	let bodyName = t('by description')
	return (
		<div>
			<MyInput
				placeholder={t('Search')}
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue={t('Sort')}
				options={[
					{ value: 'title', name: titleName },
					{ value: 'body', name: bodyName },
				]}
			></MySelect>
		</div>
	)
}
export default PostFilter
