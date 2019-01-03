package Creational.Singleton;

// 创建一个 Singleton 类。
public class Single {
    // 创建 Single 的一个对象
    private static Single instance = new Single();
    // 让构造函数为private，这样该类就不被实例化
    private Single() {}
    // 获取唯一可用的对象
    public static Single getInstance() {
        return instance;
    }
    public void showMessage() {
        System.out.println("Hello world!");
    }
}



