# 设计模式简介

设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

## 设计模式的使用
设计模式在软件开发中的两个主要用途。

### 开发人员的共同平台
设计模式提供了一个标准的术语系统，且具体到特定的情景。例如，单例设计模式意味着使用单个对象，这样所有熟悉单例设计模式的开发人员都能使用单个对象，并且可以通过这种方式告诉对方，程序使用的是单例模式。

### 最佳的实践
设计模式已经经历了很长一段时间的发展，它们提供了软件开发过程中面临的一般问题的最佳解决方案。学习这些模式有助于经验不足的开发人员通过一种简单快捷的方式来学习软件设计。


## 设计模式的类型
0. 创建型模式（Creational Patterns）
0. 结构型模式（Structural Patterns）
0. 行为型模式（Behavioral Patterns）
0. J2EE 设计模式。


#### 创建型模式
这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。	

0. 工厂模式（Factory Pattern）
0. 抽象工厂模式（Abstract Factory Pattern）
0. 单例模式（Singleton Pattern）
0. 建造者模式（Builder Pattern）
0. 原型模式（Prototype Pattern）

#### 结构型模式
这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。

0. 适配器模式（Adapter Pattern）
0. 桥接模式（Bridge Pattern）
0. 过滤器模式（Filter、Criteria Pattern）
0. 组合模式（Composite Pattern）
0. 装饰器模式（Decorator Pattern）
0. 外观模式（Facade Pattern）
0. 享元模式（Flyweight Pattern）
0. 代理模式（Proxy Pattern）

#### 行为型模式
这些设计模式特别关注对象之间的通信。

0. 责任链模式（Chain of Responsibility Pattern）
0. 命令模式（Command Pattern）
0. 解释器模式（Interpreter Pattern）
0. 迭代器模式（Iterator Pattern）
0. 中介者模式（Mediator Pattern）
0. 备忘录模式（Memento Pattern）
0. 观察者模式（Observer Pattern）
0. 状态模式（State Pattern）
0. 空对象模式（Null Object Pattern）
0. 策略模式（Strategy Pattern）
0. 模板模式（Template Pattern）
0. 访问者模式（Visitor Pattern）

#### J2EE 模式
这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。

0. MVC 模式（MVC Pattern）
0. 业务代表模式（Business Delegate Pattern）
0. 组合实体模式（Composite Entity Pattern）
0. 数据访问对象模式（Data Access Object Pattern）
0. 前端控制器模式（Front Controller Pattern）
0. 拦截过滤器模式（Intercepting Filter Pattern）
0. 服务定位器模式（Service Locator Pattern）
0. 传输对象模式（Transfer Object Pattern）