import { useState } from 'react'

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'

interface Props {
	schema?: any;
	name?: string;
	value?: string;
	options?: any;
	onChange?: any;
	addons?: any;
}

export default function (props: Props) {
	const [value, setValue] = useState(undefined);

	function handleChange(value: any) {
		const { onChange, name, addons } = props;
		addons.setValue(addons.dataPath, value);
	}
	
	return (
		<Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
			<TextField
				onChange={handleChange}
				{...props.schema}
			/>
		</Box>
	);
}

export const TextFieldSetting = {
	text: 'MTextField',
	name: 'textField',
	schema: {
		title: '输入框',
		type: 'object',
		widget: 'TextField',
	},
	setting: {
		variant: {
			title: 'variant',
			type: 'string',
			enum: ['standard', 'filled', 'outlined'],
			enumNames: ['standard', 'filled', 'outlined']
		},
		label: { 
			title: '标签',
			type: 'string',
		},
		type: {
			title: '类型',
			type: 'string',
			enum: ['number', 'password', 'search'],
			enumNames: ['number', 'password', 'search']
		},
		required: {
			title: '必填',
			type: 'string',
		},
		defaultValue: {
			title: '默认值',
			type: 'string',
		},
		disabled: {
			title: '禁用',
			type: 'string',
		},
		helperText: {
			title: '提示',
			type: 'string'
		}
	},
}