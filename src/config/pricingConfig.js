export const pricingConfig = {
  title: "Select Your Zerion Tier",
  description: "Choose the ideal plan to harness Zerion's full power and revolutionize your gaming.",
  maxPlansToShow: 4, // You can display up to 4 plans. Currently 2 are defined.
  plans: [
    {
      name: "Standard Plan",
      description: "Essential features for a great start",
      price: "$10",
      period: "/lifetime",
      features: [
        "Instant cloud-based access",
        "Access to a wide range of games",
        "Basic script library",
        "Community support access",
        "Regular platform updates"
      ],
      buttonText: "Get Standard",
      popular: false
    },
    {
      name: "Premium Plan",
      description: "Unlock the full Zerion potential",
      price: "$15",
      period: "/lifetime",
      features: [
        "All Standard features",
        "Access to exclusive premium games",
        "Advanced script library & tools",
        "Priority customer support",
        "Early access to new features"
      ],
      buttonText: "Go Premium",
      popular: true
    }
    // To add more plans (up to 4 total), copy the structure above and paste here.
    // Example for a third plan:
    // {
    //   name: "Pro Plan",
    //   description: "For serious scripters",
    //   price: "$25",
    //   period: "/lifetime",
    //   features: [
    //     "All Premium features",
    //     "Dedicated support channel",
    //     "Access to beta programs",
    //     "Higher usage limits"
    //   ],
    //   buttonText: "Get Pro",
    //   popular: false
    // },
    // Example for a fourth plan:
    // {
    //   name: "Ultimate Plan",
    //   description: "The absolute best we offer",
    //   price: "$50",
    //   period: "/lifetime",
    //   features: [
    //     "All Pro features",
    //     "Personalized onboarding",
    //     "Direct line to developers",
    //     "Custom script requests"
    //   ],
    //   buttonText: "Get Ultimate",
    //   popular: false
    // }
  ]
};