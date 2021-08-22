import { useRef, useState, useEffect } from 'react';
import Generator from 'fr-generator';
import { Modal } from 'antd';
import { useForm } from 'form-render';
import { ExpandFormRender } from '../form-render/ExpandFormRender';
import { commonSettings, concatD, widgets } from '../settings';

// const defaultValue = {
// 	schema: {
// 		type: 'object',
// 		properties: {
// 			inputName: {
// 				title: '简单输入框',
// 				type: 'string',
// 			},
// 		},
// 	},
// 	displayType: 'row',
// 	showDescIcon: true,
// 	labelWidth: 120,
// };

const defaultValue = {
	schema: {
		type: 'object',
		properties: {
			// inputName: {
			// 	title: '简单输入框',
			// 	type: 'string',
			// },
			// cascadeSelect_JFFNY3: {
			// 	title: '级联组件',
			// 	type: 'string',
			// 	'ui:widget': 'CascadeSelect',
			// 	searchBy: '{{formData.inputName}}',
			// 	fetchUrl: 'http://localhost:7000/api/ordinary/select'
			// },
			// cascadeSelect_JFFNY34: {
			// 	title: '级联组件',
			// 	type: 'string',
			// 	'ui:widget': 'CascadeSelect',
			// 	searchBy: '{{formData.cascadeSelect_JFFNY3}}',
			// },
		},
		'ui:displayType': 'row',
		'ui:showDescIcon': true,
	},
	displayType: 'row',
	showDescIcon: true,
};

type Props = {
	value?: any;
	templates?: any;
	schema?: any;
	onSave?: (value: any) => void;
	onChange?: (value: any) => void;
	onSchemaChange?: (schema: any) => void;
};

export function SchemaGenerator(props: Props) {
	const [data, setData] = useState({});
	const [effect, setEffect] = useState(false);
	const [schema, setSchma] = useState(() => props.schema || defaultValue);

	const genRef: any = useRef();
	const formRef = useForm();

	// useEffect(() => {
	// 	if (JSON.stringify(props.schema) != '{}') {
	// 		setSchma(props.schema);
	// 	}
	// }, [props.schema]);

	return (
		<>
			<Generator
				commonSettings={commonSettings}
				widgets={widgets}
				// defaultValue={JSON.stringify(schema) != '{}' ? schema : defaultValue}
				defaultValue={defaultValue}
				settings={concatD}
				ref={genRef}
				onChange={(data) => {
					setTimeout(() => {
						const schema = genRef.current && genRef.current.getValue();
						setSchma(schema);
						props.onSchemaChange && props.onSchemaChange(schema);
					}, 500);
					setData(data);
					props.onChange && props.onChange(data);
				}}
				extraButtons={[
					false,
					true,
					true,
					true,
					{
						text: '保存',
						onClick: () => {
							props.onSave && props.onSave(schema);
						},
					},
					{
						text: '展示',
						onClick: () => setEffect(true),
					},
				]}
			/>
			<Modal
				title='展示'
				visible={effect}
				onCancel={() => setEffect(false)}
				onOk={() => formRef.submit()}>
				<ExpandFormRender
					schema={schema}
					formRef={formRef}
					onFinish={(formData) => console.log(formData)}
				/>
			</Modal>
		</>
	);
}
