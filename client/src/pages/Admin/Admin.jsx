import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MessageSquare, Loader2, Trash2, CheckCircle, XCircle, RefreshCw, LogOut } from 'lucide-react';
import { appointmentApi, contactApi } from '../../utils/api';
import toast from 'react-hot-toast';

function Admin() {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [appointmentsRes, contactsRes] = await Promise.all([
        appointmentApi.getAll(),
        contactApi.getAll(),
      ]);
      setAppointments(appointmentsRes.data.data || []);
      setContacts(contactsRes.data.data || []);
    } catch (error) {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
    toast.success('Data refreshed');
  };

  const handleDeleteAppointment = async (id) => {
    if (!confirm('Are you sure you want to delete this appointment?')) return;
    
    try {
      await appointmentApi.delete(id);
      setAppointments(appointments.filter(a => a._id !== id));
      toast.success('Appointment deleted');
    } catch (error) {
      toast.error('Failed to delete appointment');
    }
  };

  const handleDeleteContact = async (id) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    
    try {
      await contactApi.delete(id);
      setContacts(contacts.filter(c => c._id !== id));
      toast.success('Message deleted');
    } catch (error) {
      toast.error('Failed to delete message');
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await contactApi.markAsRead(id);
      setContacts(contacts.map(c => 
        c._id === id ? { ...c, isRead: true } : c
      ));
      toast.success('Marked as read');
    } catch (error) {
      toast.error('Failed to mark as read');
    }
  };

  const stats = [
    { 
      label: 'Total Appointments', 
      value: appointments.length, 
      icon: Calendar,
      color: 'bg-blue-100 text-blue-600',
      subtext: `${appointments.filter(a => a.status === 'pending').length} pending`
    },
    { 
      label: 'Total Patients', 
      value: new Set(appointments.map(a => a.email)).size, 
      icon: Users,
      color: 'bg-green-100 text-green-600',
      subtext: 'Unique contacts'
    },
    { 
      label: 'Contact Messages', 
      value: contacts.length, 
      icon: MessageSquare,
      color: 'bg-purple-100 text-purple-600',
      subtext: `${contacts.filter(c => !c.isRead).length} unread`
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-700',
      confirmed: 'bg-green-100 text-green-700',
      completed: 'bg-blue-100 text-blue-700',
      cancelled: 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-primary-600" />
          <span className="text-gray-600">Loading admin dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage appointments and messages</p>
          </div>
          
          <div className="flex gap-3">
            <motion.button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </motion.button>
            
            <motion.a
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LogOut className="w-4 h-4" />
              Back to Site
            </motion.a>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.subtext}</p>
                </div>
                
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'appointments', label: 'Appointments', count: appointments.length },
                { id: 'contacts', label: 'Messages', count: contacts.length },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    activeTab === tab.id ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'appointments' ? (
              <div className="space-y-4">
                {appointments.length === 0 ? (
                  <div className="text-center py-12">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No appointments yet</p>
                  </div>
                ) : (
                  appointments.map((appointment) => (
                    <motion.div
                      key={appointment._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{appointment.name}</h4>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                              {appointment.status}
                            </span>
                          </div>
                          
                          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-600">
                            <span><strong>Phone:</strong> {appointment.phone}</span>
                            <span><strong>Age:</strong> {appointment.age || 'N/A'} {appointment.gender && `(${appointment.gender})`}</span>
                            <span><strong>Date:</strong> {new Date(appointment.preferredDate).toLocaleDateString()}</span>
                            <span><strong>Booked:</strong> {new Date(appointment.createdAt).toLocaleDateString()}</span>
                          </div>
                          
                          <p className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                            <strong>Problem:</strong> {appointment.problem}
                          </p>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleDeleteAppointment(appointment._id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No messages yet</p>
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <motion.div
                      key={contact._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`border rounded-xl p-5 hover:shadow-md transition-shadow ${
                        !contact.isRead ? 'border-primary-300 bg-primary-50/30' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                            {!contact.isRead && (
                              <span className="w-2 h-2 bg-primary-600 rounded-full" />
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            <span>{contact.email}</span>
                            {contact.phone && <span>{contact.phone}</span>}
                            <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                          </div>
                          
                          <p className="font-medium text-gray-900 mb-2">{contact.subject}</p>
                          <p className="text-gray-600 text-sm bg-white p-3 rounded-lg border border-gray-100">
                            {contact.message}
                          </p>
                        </div>
                        
                        <div className="flex gap-2">
                          {!contact.isRead && (
                            <button
                              onClick={() => handleMarkAsRead(contact._id)}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Mark as read"
                            >
                              <CheckCircle className="w-5 h-5" />
                            </button>
                          )}
                          
                          <button
                            onClick={() => handleDeleteContact(contact._id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;