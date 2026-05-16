# -*- coding: utf-8 -*-
path = r'C:\Users\ASUS\.cursor\projects\C-Users-ASUS-AppData-Local-Temp-9c8aa7ff-597e-4457-a302-4d5138552dcd\index.html'
D = 'div'
with open(path, encoding='utf-8') as f:
    s = f.read()

bad_open = '<' + 'motion '
bad_close = '</' + 'motion>'
s = s.replace(bad_open, '<' + D + ' ')
s = s.replace(bad_close, '</' + D + '>')

# Profile summary block
old_summary = '''      <div id="profile-summary" class="profile-summary glass-card hidden">
        <h3 id="profile-welcome-heading">Welcome, <span id="profile-username"></span></h3>
        <div class="profile-grid">
          <motion class="profile-field-item"><span class="label">Email</span><span id="profile-email" class="profile-value"></span></div>
          <div class="profile-field-item"><span class="label">Phone</span><span id="profile-phone" class="profile-value"></span></div>
          <div><span class="label">Gender</span><span id="profile-gender"></span></div>
          <div><span class="label">Age</span><span id="profile-age"></span></motion>
          <div><span class="label">Saved Jobs</span><span id="profile-saved-count">0</span></div>
        </div>
      </div>'''.replace('<motion ', '<' + D + ' ').replace('</motion>', '</' + D + '>')

new_summary = '''      <div id="profile-summary" class="profile-summary glass-card hidden">
        <div class="profile-summary-top">
          <button type="button" class="avatar avatar-btn avatar-lg" id="home-avatar-btn" title="View Profile" aria-label="View Profile">
            <span class="avatar-initials" id="home-avatar">U</span>
            <img class="avatar-img hidden" id="home-avatar-img" alt="">
          </button>
          <h3 id="profile-welcome-heading">Welcome, <span id="profile-username"></span></h3>
        </div>
        <div class="profile-grid">
          <div class="profile-field-item"><span class="label">Email</span><span id="profile-email" class="profile-value"></span></div>
          <div class="profile-field-item"><span class="label">Phone</span><span id="profile-phone" class="profile-value"></span></motion>
          <div class="profile-field-item"><span class="label">Gender</span><span id="profile-gender" class="profile-value"></span></div>
          <div class="profile-field-item"><span class="label">Age</span><span id="profile-age" class="profile-value"></span></div>
          <div class="profile-field-item"><span class="label">Saved Jobs</span><span id="profile-saved-count" class="profile-value">0</span></div>
        </div>
      </div>'''.replace('</motion>', '</' + D + '>')

if 'profile-summary-top' not in s:
    if old_summary in s:
        s = s.replace(old_summary, new_summary)
    else:
        s = s.replace(
            '<h3 id="profile-welcome-heading">Welcome, <span id="profile-username"></span></h3>',
            '''<motion class="profile-summary-top">
          <button type="button" class="avatar avatar-btn avatar-lg" id="home-avatar-btn" title="View Profile" aria-label="View Profile">
            <span class="avatar-initials" id="home-avatar">U</span>
            <img class="avatar-img hidden" id="home-avatar-img" alt="">
          </button>
          <h3 id="profile-welcome-heading">Welcome, <span id="profile-username"></span></h3>
        </div>'''.replace('<motion ', '<' + D + ' ').replace('</motion>', '</' + D + '>')
        )

# Search empty
if 'search-empty' not in s:
    s = s.replace(
        '<motion id="jobs-container" class="jobs-list"></' + D + '>',
        '<div id="jobs-container" class="jobs-list"></div>\n        <div id="search-empty" class="empty-state glass-card hidden">\n          <p>No realistic job matches found based on your current skills, experience, and salary expectations. Try adding relevant career skills or adjusting your salary range.</p>\n        </div>'
    )

# Skills section
skills_block = '''      <div id="skills-loading" class="skills-loading hidden">
        <div class="loader-spinner"></div>
        <p>Analyzing your skills profile...</p>
      </div>
      <div id="skills-results-area" class="hidden">
        <div id="skills-guidance" class="guidance-msg glass-card hidden"></motion>
        <div id="skills-results-header" class="results-header hidden">
          <h3 id="skills-results-count">0 jobs found</h3>
        </div>
        <div id="skills-jobs-container" class="jobs-list"></div>
        <div id="skills-empty" class="empty-state glass-card hidden">
          <p id="skills-empty-msg">No realistic job matches found based on your education and skills.</p>
        </div>
      </div>
      <div id="skills-job-detail-section" class="job-detail-section hidden">
        <div class="job-detail-nav">
          <button type="button" class="btn btn-outline" id="skills-back-to-results">← Back to Results</button>
          <div class="job-nav-buttons">
            <button type="button" class="btn btn-outline" id="skills-btn-prev-job" disabled>Previous Job</button>
            <button type="button" class="btn btn-outline" id="skills-btn-next-job" disabled>Next Job</button>
          </div>
        </div>
        <div id="skills-job-detail-content"></div>
      </div>'''.replace('</motion>', '</' + D + '>')

if 'skills-results-area' not in s:
    s = s.replace(
        '''      <div id="skills-loading" class="skills-loading hidden">
        <motion class="loader-spinner"></div>
        <p>Analyzing your skills profile...</p>
      </div>
      <div id="skills-results" class="skills-results hidden"></div>'''.replace('<motion ', '<' + D + ' '),
        skills_block
    )

# Profile view photo
if 'profile-photo-section' not in s:
    s = s.replace(
        '<div id="profile-view" class="profile-page glass-card">\n        <div class="profile-fields">',
        '''<div id="profile-view" class="profile-page glass-card">
        <div class="profile-photo-section">
          <div class="avatar avatar-xl" id="profile-page-avatar-wrap">
            <span class="avatar-initials" id="profile-page-initials">U</span>
            <img class="avatar-img hidden" id="profile-page-img" alt="">
          </div>
          <div class="profile-photo-actions">
            <input type="file" id="profile-image-upload" accept="image/*" hidden>
            <button type="button" class="btn btn-outline btn-sm" id="btn-upload-photo">Change Photo</button>
            <button type="button" class="btn btn-ghost btn-sm hidden" id="btn-remove-photo">Remove Profile Picture</button>
          </div>
        </div>
        <div class="profile-fields">'''
    )

if 'edit-profile-image' not in s:
    s = s.replace(
        '<form id="profile-edit-form" class="profile-page glass-card hidden" novalidate>\n        <div class="form-row">',
        '''<form id="profile-edit-form" class="profile-page glass-card hidden" novalidate>
        <div class="profile-photo-section profile-photo-edit">
          <div class="avatar avatar-xl" id="edit-avatar-preview">
            <span class="avatar-initials" id="edit-avatar-initials">U</span>
            <img class="avatar-img hidden" id="edit-avatar-img" alt="">
          </motion>
          <div class="profile-photo-actions">
            <input type="file" id="edit-profile-image" accept="image/*" hidden>
            <button type="button" class="btn btn-outline btn-sm" id="btn-edit-upload-photo">Change Photo</button>
            <button type="button" class="btn btn-ghost btn-sm hidden" id="btn-edit-remove-photo">Remove Profile Picture</button>
          </div>
        </div>
        <div class="form-row">'''.replace('</motion>', '</' + D + '>')
    )

for label, fid in [
    ('Full Name', 'view-fullname'), ('Username', 'view-username'), ('Email', 'view-email'),
    ('Phone Number', 'view-phone'), ('Gender', 'view-gender'), ('Age', 'view-age'), ('Date of Birth', 'view-dob')
]:
    s = s.replace(
        f'<{D}><span class="label">{label}</span><span id="{fid}">—</span></{D}>',
        f'<{D} class="profile-field-item"><span class="label">{label}</span><span id="{fid}" class="profile-value">—</span></{D}>'
    )

with open(path, 'w', encoding='utf-8') as f:
    f.write(s)
print('done')
