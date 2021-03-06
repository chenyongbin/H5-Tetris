/**
 * @file 游戏面板模块
 * @version 1.0.0
 */

import { panel as PANEL_CONFIG } from './config';
import Canvas from './canvas';

let screenOptions = { offsetX: 0, offsetY: 0, width: 0, height: 0 },
	controlOptions = { offsetX: 0, offsetY: 0, width: 0, height: 0 };

/**
 * 初始化
 * @param {element} containerDOM 容器DOM对象
 */
const initialize = (containerDOM) => {
	let width = containerDOM.clientWidth,
		height = containerDOM.clientHeight;

	screenOptions = {
		offsetX: PANEL_CONFIG.screenMargin,
		offsetY: PANEL_CONFIG.screenMargin,
		width: width - 2 * PANEL_CONFIG.screenMargin,
		height: height * PANEL_CONFIG.screenHeightProportion - 2 * PANEL_CONFIG.screenMargin
	};

	controlOptions = {
		offsetX: PANEL_CONFIG.controlMargin,
		offsetY: height * PANEL_CONFIG.screenHeightProportion,
		width: width - 2 * PANEL_CONFIG.controlMargin,
		height: height * (1 - PANEL_CONFIG.screenHeightProportion) - PANEL_CONFIG.controlMargin
	};

	let canvas = new Canvas(containerDOM, 0, 0, width, height);
	canvas.setStyles([ 'z-index:1;' ]);
	canvas.fillRect(0, 0, width, height, {
		fillStyle: PANEL_CONFIG.backgroundColor
	});

	canvas.clearRect(0, 0, 10, 10);
	canvas.fillCircle(10, 10, 10, Math.PI / 2, Math.PI, true);
	canvas.clearRect(width - 10, 0, 10, 10);
	canvas.fillCircle(width - 10, 10, 10, 0, Math.PI / 2, true);
	canvas.clearRect(width - 10, height - 10, 10, 10);
	canvas.fillCircle(width - 10, height - 10, 10, 0, Math.PI * 2, false);
	canvas.clearRect(0, height - 10, 10, 10);
	canvas.fillCircle(10, height - 10, 10, Math.PI, Math.PI * 1.5, true);

	canvas.clearRect(screenOptions.offsetX, screenOptions.offsetY, screenOptions.width, screenOptions.height);
	canvas.fillRect(screenOptions.offsetX, screenOptions.offsetY, screenOptions.width, screenOptions.height, {
		fillStyle: PANEL_CONFIG.screenBackgroundColor
	});
};

/**
 * 获取屏幕选项配置
 * @returns
 */
const getScreenOptions = () => {
	return screenOptions;
};

/**
 * 获取控制板选项配置
 * @returns
 */
const getControlOptions = () => {
	return controlOptions;
};

export default { initialize, getScreenOptions, getControlOptions };
