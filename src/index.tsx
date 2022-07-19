import React from "react";
import ReactDOM from "react-dom/client";
import 'github-markdown-css/github-markdown.css'
import {
	BrowserRouter as Router,
	useRoutes,
} from "react-router-dom";
import "antd/dist/antd.css";
// 引入页面
import App from "./App/App";
import JsFile from './view/jsFile'
import Home from "./view/home";
import TsReact from './view/tsReact/index'
// 子路由
import Basics from './view/tsReact/basics'
import Advanced from './view/tsReact/advanced'
import Test from './view/tsReact/test'
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
function DomPath() {
	const Dom = useRoutes([
		{
			path: "/",
			element: <App></App>,
		},
		{
			path: "/Home",
			element: <Home></Home>,
		},
		{
			path:'/JsFile',
			element:<JsFile></JsFile>,
		},
		{
			path:'/TsReact',
			element:<TsReact></TsReact>,
			children:[
				{
					path:'/TsReact/basics',
					element:<Basics></Basics>
				},
				{
					path:'/TsReact/advanced',
					element:<Advanced></Advanced>
				},
				{
					path:'/TsReact/test',
					element:<Test></Test>
				}
			]
		}
	]);
	return Dom;
}

root.render(
	<div>
		<Router>
			<DomPath />
		</Router>
	</div>
);
