import FormRender from 'form-render';
import { widgets } from "../settings";

type Props = {
	onFinish?: (formData: any) => void;
	formRef: any;
	schema: any;
};

export function ExpandFormRender(props: Props) {
	console.log('schema', props.schema);
	return (
		<FormRender
			schema={props.schema}
			form={props.formRef}
			onFinish={(formData: any) => {
				props.onFinish && props.onFinish(formData);
			}}
			widgets={widgets}
		/>
	);
}
