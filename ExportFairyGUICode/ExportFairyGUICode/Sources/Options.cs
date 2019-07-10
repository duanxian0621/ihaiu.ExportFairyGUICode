﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using CommandLine;

public class Options
{
    // 运行完，是否自动关闭cmd
    [Option("autoEnd", Required = false, Default = true)]
    public bool autoEnd { get; set; }

    // 命令
    [Option("cmd", Required = false, Default = "generatecode")]
    public string cmd { get; set; }

    // 启动参数设置 配置路径
    [Option("optionSetting", Required = false, Default = "./optionSetting.json")]
    public string optionSetting { get; set; }

    // xlsx目录(可以用分号';'分割填写多个路径)
    [Option("xlsxDir", Required = false, Default = "../FairyGUI")]
    public string fairyProject { get; set; }


    // 代码--代码保存路径
    [Option("codePath", Required = false, Default = "../FairyGUICode")]
    public string codePath { get; set; }

    // 代码--命名空间
    [Option("codeNamespace", Required = false, Default = "fgui")]
    public string codeNamespace { get; set; }

    // 代码--成员变量名前缀
    [Option("codeMemberNamePrefix", Required = false, Default = "")]
    public string codeMemberNamePrefix { get; set; }

    // 代码--忽略自动生成的成员变量名
    [Option("codeIgnoreNoname", Required = false, Default = false)]
    public bool codeIgnoreNoname { get; set; }


    // 代码--忽略非法组件名称
    [Option("codeIgnorIllegalClassName", Required = false, Default = false)]
    public bool codeIgnorIllegalClassName { get; set; }

    // 代码--忽略~NCode结尾的目录下的组件
    [Option("codeIgnorNCode", Required = false, Default = true)]
    public bool codeIgnorNCode { get; set; }

    // 代码--忽略~NCode结尾的目录下的组件
    [Option("codeIgnorNCodeFlag", Required = false, Default = "~NCode")]
    public string codeIgnorNCodeFlag { get; set; }


    // 代码--忽略没设置导出的组件
    [Option("codeIgnorNoExported", Required = false, Default = true)]
    public bool codeIgnorNoExported { get; set; }

    // 代码--导出依赖的组件
    [Option("codeExportDepend", Required = false, Default = true)]
    public bool codeExportDepend { get; set; }

    // 代码--是否使用其他包的组件类型
    [Option("codeIgnoreNoname", Required = false, Default = true)]
    public bool codeUseOtherPkgType{ get; set; }

    // 声音--包名
    [Option("soundPackageName", Required = false, Default = "Sound")]
    public string soundPackageName { get; set; }

    // 代码--引擎设置
    [Option("engineSettingJson", Required = false, Default = "ExportFairyGUICode-EngineSetting-laya2.json")]
    public string engineSettingJson { get; set; }




    public void Save(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./optionSetting.json";

        string json = JsonHelper.ToJsonType(this);
        File.WriteAllText(path, json);
    }

    public static Options Load(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./optionSetting.json";

        string json = File.ReadAllText(path);
        Options options = JsonHelper.FromJson<Options>(json);
        return options;
    }
}