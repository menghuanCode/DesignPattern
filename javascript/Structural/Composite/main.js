/**
 * 组合模式
 * 组合模式在对象间形成 树形结构
 * 组合模式中基本对象和聚合对象被一致对待
 * 无须关心对象有多少层，调用只需要在根部进行调用
 */


const MacroCommand = function () {
    return {
        list: [],
        add: function (task) {
            this.list.push(task)
        },
        excute: function () {
            this.list.map(item => item.excute());
        }
    }
}


const command1 = MacroCommand();

command1.add({
    excute: () => {
        console.log("煮咖啡")
    }
})

const command2 = MacroCommand();

command2.add({
    excute: () => {
        console.log("打开电视");
    }
})

command2.add({
    excute: () => {
        console.log("打开音箱");
    }
})


const command3 = MacroCommand();

command3.add({
    excute: () => {
        console.log("打开空调");
    }
})

command3.add({
    excute: () => {
        console.log("打开电脑");
    }
})


const macroCommand = MacroCommand();
macroCommand.add(command1)
macroCommand.add(command2)
macroCommand.add(command3)

// macroCommand.excute();

// demo 扫描文件夹
const Folder = function (folder) {
    this.folder = folder;
    this.list = [];
}

Folder.prototype.add = function (resource) {
    this.list.push(resource)
}

Folder.prototype.scan = function () {
    console.log('开始扫描文件夹：', this.folder)
    this.list.map(item => item.scan());
}

const File = function (file) {
    this.file = file;
}

File.prototype.add = function () {
    throw Error('文件下不能添加其他文件夹或文件')
}

File.prototype.scan = function () {
    console.log('开始扫描文件：', this.file);
}

const folder = new Folder('根文件夹');
const folder1 = new Folder('JS');
const folder2 = new Folder('life');

const file1 = new File('深入React技术栈.pdf');
const file2 = new File('JavaScript权威指南.pdf');
const file3 = new File('....pdf');

folder.add(file1);
folder.add(file2);

folder2.add(file3);

folder.add(folder1)
folder.add(folder2)

folder.scan();



