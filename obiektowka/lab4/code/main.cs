#define TRACE_ON

class Program
{
    static int Square(int x) { // this method should has exactly the same signature as delegate 's in ExampleTransformer
        return x * x;
    }

    static int Cube(int x) { // this method should has exactly the same signature as delegate 's in ExampleTransformer
        return x * x * x;
    }

    static int Multiply (int x , int y) {
        return x * y ;
    }

    static void Main(string[] args) {
        ExampleTransformer transformer = new ExampleTransformer();
        transformer.Transform(Square, 10);
        transformer.Transform(Cube, 10);
        transformer.Transform(Multiply, 3, 4);
        transformer.Transform((x) = > { return x * x * x * x; }, 2);

        List <string> lst = new List <string>();
        lst.Add("Ross Geller");
        lst.Add("Chandler Bing");
        lst.Add("Joey Tribbiani");
        lst.Add("Monica Geller");
        var gellers = lst.Where(x => x.Contains("Geller")).ToList();

        transformer.TransformationCompleted += () => {
            Console.WriteLine("Transformation completed !");
        };

        transformer.Transform((x , y) => { return x/y; }, 2, 0);



        Type configType = typeof(Configuration);
        // TODO check intellisense

        MethodInfo [] methodInfo = configType.GetMethods();
        Console.WriteLine("The methods of the Configuration class are :");
        foreach (MethodInfo temp in methodInfo) {
            Console.WriteLine(temp.Name);
        }

        PropertyInfo [] propertiesInfo = configType.GetProperties();
        Console.WriteLine("The properties of the Configuration class are :");
        foreach (PropertyInfo temp in propertiesInfo) {
            Console.WriteLine(temp.Name);
        }

        MethodInfo [] methodInfo = configType.GetMethods(BindingFlags.Public | BindingFlags.Static);

        Console.WriteLine("Specify full name of the class to create an object :");
        string className = Console.ReadLine(); // one has to provide full name (with namespace!)
        object ret = Activator.CreateInstance(Type.GetType(className));
        Console.WriteLine(ret.GetType().FullName);

        PropertyInfo propertyInfo = ret.GetType().GetProperty(" MaxUsersCount ");
        propertyInfo.SetValue(ret, 12345);
        Console.WriteLine(" MaxUsersCount value has been set to: " + (ret as Configuration)?.MaxUsersCount); // before one has to cast to configuration (?. skip if null)

        Log("abc");
        // kompilator ignoruje metodę, jeśli dyrektywa TRACE_ON jest traktowana jako nieprawdziwa
    }

    [Conditional("TRACE_ON")]
    [Obsolete ("Legacy implementation, use ... instead")] // warning
    // [Obsolete ("Legacy implementation, use ... instead", true)] // error
    public static void Log (string logMsg) {
        Console.WriteLine(logMsg);
    }

    var customAttributes = typeof (Configuration).GetCustomAttributes();
    foreach(var attribute in customAttributes) {
        Console.WriteLine((attribute as CustomAttribute)?.Author);
        Console.WriteLine((attribute as CustomAttribute)?.Description);
    }

    Configuration.Save(configuration , "Config.xml");
}