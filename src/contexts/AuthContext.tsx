import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const savedUser = localStorage.getItem('planifika_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate login logic
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      role: email.includes('admin') ? 'institution_admin' : 
            email.includes('prof') ? 'professor' :
            email.includes('research') ? 'researcher' : 'student',
      avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop&crop=face',
      institution: 'Stanford University'
    };
    
    setUser(mockUser);
    localStorage.setItem('planifika_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('planifika_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}