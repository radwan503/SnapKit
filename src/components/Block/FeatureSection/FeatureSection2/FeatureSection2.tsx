import { 
  LayoutDashboard, 
  Plug, 
  BarChart3, 
  Workflow, 
  Database, 
  Users 
} from "lucide-react";

const features = [
  {
    title: "CUSTOM DASHBOARDS",
    description:
      "Create and personalize your own dashboards to display real-time data and insights that matter most to your business.",
    icon: LayoutDashboard,
  },
  {
    title: "INTEGRATIONS",
    description:
      "Easily integrate with popular tools like Slack, Google Drive, Salesforce, and more to streamline your workflow.",
    icon: Plug,
  },
  {
    title: "ADVANCED ANALYTICS",
    description:
      "Access detailed analytics and generate comprehensive reports to track your performance and business growth.",
    icon: BarChart3,
  },
  {
    title: "AUTO WORKFLOWS",
    description:
      "Automate repetitive tasks to customizable workflows to save time and reduce human error.",
    icon: Workflow,
  },
  {
    title: "DATA MANAGEMENT",
    description:
      "Protect your data with enterprise-grade security features including encryption, access controls, and regular backups.",
    icon: Database,
  },
  {
    title: "COLLABORATION",
    description:
      "Collaborate with your team in real time with shared documents, instant messaging, and project tracking tools.",
    icon: Users,
  },
];

const FeaturesSection2=()=> {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight max-w-2xl">
            POWERFUL FEATURES <br />
            DESIGNED FOR EFFICIENCY
          </h2>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md shadow-sm transition-colors">
            View all features
          </button>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FeaturesSection2
