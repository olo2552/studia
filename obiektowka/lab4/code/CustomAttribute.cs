[AttributeUsage(AttributeTargets.Class)]
public class CustomAttribute: Attribute {
    public string Author { get ; }
    public string Description { get ; }

    public CustomAttribute (string author, string description) {
        Author = author;
        Description = description;
    }
}