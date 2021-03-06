﻿using System;
using System.Collections.Generic;
using System.Text;


public static class TsPathOut
{
    public static string ComponentStruct
    {
        get
        {
            return Setting.Options.codePath + "/TS/Generates/{0}/{1}Struct.ts";
        }
    }


    public static string ComponentExtend
    {
        get
        {
            return Setting.Options.codePath + "/TS/Extends/{0}/{1}.ts";
        }
    }



    public static string Binder
    {
        get
        {
            return Setting.Options.codePath + "/TS/Generates/{0}/{1}.ts";
        }
    }

    public static string GuiPackageNames
    {
        get
        {
            return Setting.Options.codePath + "/TS/Generates/GuiPackageNames.ts";
        }
    }

    public static string GuiBinderList
    {
        get
        {
            return Setting.Options.codePath + "/TS/Generates/GuiBinderList.ts";
        }
    }



    public static string SoundKey
    {
        get
        {
            return Setting.Options.codePath + "/TS/Generates/SoundKey.ts";
        }
    }


}