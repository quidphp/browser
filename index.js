/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */

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
const NewShortcut = {};
NewShortcut.getAttr = Ele.getAttr.bind(Ele);
NewShortcut.setAttr = Ele.setAttr.bind(Ele);
NewShortcut.toggleAttr = Ele.toggleAttr.bind(Ele);
NewShortcut.setCss = Ele.setCss.bind(Ele);
NewShortcut.toggleClass = Ele.toggleClass.bind(Ele);
NewShortcut.getHtml = Ele.getHtml.bind(Ele);
NewShortcut.setHtml = Ele.setHtml.bind(Ele);
NewShortcut.qs = Nod.scopedQuery.bind(Nod);
NewShortcut.qsa = Nod.scopedQueryAll.bind(Nod);
NewShortcut.getProp = Target.getProp.bind(Target);
NewShortcut.setProp = Target.setProp.bind(Target);
NewShortcut.getData = Target.getData.bind(Target);
NewShortcut.setData = Target.setData.bind(Target);
NewShortcut.setHdlr = Target.setHandler.bind(Target);
NewShortcut.setHdlrs = Target.setsHandler.bind(Target);
NewShortcut.allHdlr = Target.allHandler.bind(Target);
NewShortcut.trigHdlr = Target.triggerHandler.bind(Target);
NewShortcut.trigHdlrs = Target.triggersHandler.bind(Target);
NewShortcut.ael = Target.addListener.bind(Target);
NewShortcut.aelDelegate = Target.addDelegatedListener.bind(Target);
NewShortcut.aelPassive = Target.addPassiveListener.bind(Target);
NewShortcut.aelOnce = Target.addListenerOnce.bind(Target);
NewShortcut.rel = Target.removeListener.bind(Target);
NewShortcut.trigEvt = Target.triggerNoBubble.bind(Target);
NewShortcut.trigBubble = Target.triggerBubble.bind(Target);
NewShortcut.trigSetup = Target.triggerSetup.bind(Target);
NewShortcut.trigTeardown = Target.triggerTeardown.bind(Target);
Shortcut = { ...Shortcut, ...NewShortcut };

// export
export { 
    Arr, ArrLike, Bool, Component, Datetime, Debug, Env, Factory, Func, Html, Integer, Json, Nav, Num, Obj, Pojo, Scalar, Shortcut, Str, Validate, Vari, Test, TestSuite, Tool,
    Browser, Doc, Dom, Ele, Evt, HistoryState, Nod, Request, Target, Uri, Win, Xhr
};