/**
 * @file 网格模块
 * @module grid
 * @author chenyongbin <chenyongbin789@163.com>
 * @version 0.0.1
 */

/*
 (0,0)********(1,0)
 *                * 
 *     GRID       *
 *     (x,y)      * 
 *                *
 (0,1)********(1,1)
 */

import { getGridRowCount, getGridColCount } from './config';
import { getGridContainer } from './containers';

let $container = getGridContainer(),
    rowCount = getGridRowCount(),
    colCount = getGridColCount(),
    clearFilledRowsAnimationDuration = 300;

/**
 * 初始化
 */
const initialize = () => {
    // 组装网格HTML，并将其绑定至container    
}

/**
 * 激活一个点/一个区域/一行
 * @param {object|array|number} coordiante - 坐标点/坐标点集合/纵坐标
 */
const activate = coordiante => { }

/**
 * 取消激活一个点/一个区域/一行
 * @param {object|array|number} coordiante - 坐标点/坐标点集合/纵坐标
 */
const inactivate = coordiante => { }

/**
 * 获取网格的尺寸
 * @returns {number[]} 网格的尺寸[行数，列数]
 */
const getSize = () => {
    return [rowCount, colCount];
}

/**
 * 清空所有已激活状态的坐标
 */
const inactivateAll = () => { }

initialize();

export default {
    activate,
    inactivate,
    inactivateAll,
    getSize,
}