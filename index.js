/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */

// index
// entry file for the module

// import quidphp-node
import { Arr, ArrLike, Bool, Component, Datetime, Debug, Env, Factory, Func, Html, Integer, Json, Nav, Num, Obj, Pojo, Scalar, Shortcut, Str, Validate, Vari, Test, TestSuite, Tool } from 'quidphp-node-temp';

// simple import
import Browser from './src/browser.js';
import Dom from './src/dom.js';
import HistoryState from './src/historyState.js';
import Request from './src/request.js';
import Uri from './src/uri.js';
import Xhr from './src/xhr.js';

// type import
import DataTarget from './src/data.js';
import DocTarget from './src/doc.js';
import EleTarget from './src/ele.js';
import EvtPrimitive from './src/evt.js';
import HandlerTarget from './src/handler.js';
import ListenerTarget from './src/listener.js';
import { NodTarget, EleDocTarget, EleWinTarget } from './src/nod.js';
import SelectorTarget from './src/selector.js';
import TargetRoot from './src/target.js';
import WinTarget from './src/win.js';

// build
const Evt = Factory(Tool.Type,EvtPrimitive);
const Win = Factory(TargetRoot,DataTarget,HandlerTarget,ListenerTarget,EleWinTarget,WinTarget);
const Doc = Factory(TargetRoot,DataTarget,HandlerTarget,ListenerTarget,SelectorTarget,NodTarget,EleDocTarget,DocTarget);
const Ele = Factory(TargetRoot,DataTarget,HandlerTarget,ListenerTarget,SelectorTarget,NodTarget,EleWinTarget,EleDocTarget,EleTarget,Tool.ArrLoop);
const Nod = Factory(TargetRoot,DataTarget,HandlerTarget,ListenerTarget,SelectorTarget,NodTarget);
const Target = Factory(TargetRoot,DataTarget,HandlerTarget,ListenerTarget);

// shortcut
Shortcut.getAttr = Ele.getAttr.bind(Ele);
Shortcut.setAttr = Ele.setAttr.bind(Ele);
Shortcut.toggleAttr = Ele.toggleAttr.bind(Ele);
Shortcut.setCss = Ele.setCss.bind(Ele);
Shortcut.toggleClass = Ele.toggleClass.bind(Ele);
Shortcut.getHtml = Ele.getHtml.bind(Ele);
Shortcut.setHtml = Ele.setHtml.bind(Ele);
Shortcut.qs = Nod.scopedQuery.bind(Nod);
Shortcut.qsa = Nod.scopedQueryAll.bind(Nod);
Shortcut.getProp = Target.getProp.bind(Target);
Shortcut.setProp = Target.setProp.bind(Target);
Shortcut.getData = Target.getData.bind(Target);
Shortcut.setData = Target.setData.bind(Target);
Shortcut.setHdlr = Target.setHandler.bind(Target);
Shortcut.setHdlrs = Target.setsHandler.bind(Target);
Shortcut.allHdlr = Target.allHandler.bind(Target);
Shortcut.trigHdlr = Target.triggerHandler.bind(Target);
Shortcut.trigHdlrs = Target.triggersHandler.bind(Target);
Shortcut.ael = Target.addListener.bind(Target);
Shortcut.aelDelegate = Target.addDelegatedListener.bind(Target);
Shortcut.aelPassive = Target.addPassiveListener.bind(Target);
Shortcut.aelOnce = Target.addListenerOnce.bind(Target);
Shortcut.rel = Target.removeListener.bind(Target);
Shortcut.trigEvt = Target.triggerNoBubble.bind(Target);
Shortcut.trigBubble = Target.triggerBubble.bind(Target);
Shortcut.trigSetup = Target.triggerSetup.bind(Target);
Shortcut.trigTeardown = Target.triggerTeardown.bind(Target);

// export
export { 
    Arr, ArrLike, Bool, Component, Datetime, Debug, Env, Factory, Func, Html, Integer, Json, Nav, Num, Obj, Pojo, Scalar, Shortcut, Str, Validate, Vari, Test, TestSuite, Tool,
    Browser, Doc, Dom, Ele, Evt, HistoryState, Nod, Request, Target, Uri, Win, Xhr
};