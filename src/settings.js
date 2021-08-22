import {
	defaultSettings,
	defaultCommonSettings,
	defaultGlobalSettings,
} from "fr-generator";

// 自定义组件
import RemoteDataSelect, { RemoteDataSelectSetting } from './widgets/custom/RemoteDataSelect';
import CascadeSelect, { CascadeSelectSetting } from './widgets/custom/CascadeSelect';
import TextField, { TextFieldSetting } from './widgets/material-ui/TextField';

// https://sourcegraph.com/github.com/alibaba/x-render@master/-/blob/tools/schema-generator/src/Settings/index.js
export const commonSettings = {
	  $id: {
    title: 'ID',
    description: '字段名称/英文',
    type: 'string',
    widget: 'idInput',
    required: true,
  },
  title: {
    title: '标题',
    type: 'string',
  },
}

let settings = [
	{
		title: '自定义开发配置',
		widgets: [
			RemoteDataSelectSetting,
			CascadeSelectSetting,
			
		],
	},
	{
		title: 'Material UI',
		widgets: [
			TextFieldSetting,
		]
	}
];

export const widgets = { RemoteDataSelect, CascadeSelect, TextField }

export const concatD = settings;
// export const concatD = settings.concat(defaultSettings);