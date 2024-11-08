// MenuPlans.tsx
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "../../styles/MenuPlans.css";

interface NavigationMenuDemoProps {
  currentPlan: 'Basic' | 'Pro' | 'Company';
  onPlanChange: (plan: 'Basic' | 'Pro' | 'Company') => void;
}

const NavigationMenuDemo: React.FC<NavigationMenuDemoProps> = ({ currentPlan, onPlanChange }) => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger 
            className={`NavigationMenuTrigger ${currentPlan === 'Basic' ? 'active' : ''}`}
            onClick={() => onPlanChange('Basic')}
          >
            Basic 
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger 
            className={`NavigationMenuTrigger ${currentPlan === 'Pro' ? 'active' : ''}`}
            onClick={() => onPlanChange('Pro')}
          >
            Pro 
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger 
            className={`NavigationMenuTrigger ${currentPlan === 'Company' ? 'active' : ''}`}
            onClick={() => onPlanChange('Company')}
          >
            Company 
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuDemo;